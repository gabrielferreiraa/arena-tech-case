import { format } from "date-fns";

export function formatDateFeed(date: Date) {
  return format(date, "do, MMM");
}