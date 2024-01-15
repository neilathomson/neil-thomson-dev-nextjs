export function durationDisplay(from: Date, to?: Date) {
  const fromDateString = from.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
  const toDateString = to?.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) ?? 'Present';
  return `${fromDateString} - ${toDateString}`;
}
