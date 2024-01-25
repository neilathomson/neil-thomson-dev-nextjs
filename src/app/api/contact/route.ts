import { NextRequest, NextResponse } from 'next/server';
import ContactSchema from '@/app/api/contact/contact-schema';
import prisma from '@/services/prisma';

type ResponseData = {
  message: string
}

async function POST(
  req: NextRequest,
) {
  const result = ContactSchema.safeParse(await req.json());
  if (!result.success) {
    // TODO log error
    return new NextResponse<ResponseData>(null, {
      status: 400,
    });
  }
  const { data } = result;
  try {
    await prisma.message.create({
      data: {
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    });
  } catch (e) {
    // TODO log error
    return new NextResponse<ResponseData>(null, {
      status: 400,
    });
  }
  // successful message
  return new NextResponse<ResponseData>(null, {
    status: 202,
  });
}

// eslint-disable-next-line import/prefer-default-export
export { POST };
