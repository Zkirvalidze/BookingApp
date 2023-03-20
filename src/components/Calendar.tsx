import { FC, useState } from 'react';
import ReactCalendar from 'react-calendar';
import { add, format } from 'date-fns';

interface CalendarProps {}
interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}
const Calendar: FC<CalendarProps> = ({}) => {
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });
  const getTimes = () => {
    if (!date.justDate) return;
    const { justDate } = date;
    const beginning = add(justDate, { hours: 9 });
    const end = add(justDate, { hours: 17 });
    const interval = 30; //in minutes

    const times = [];

    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }
    return times;
  };
  const times = getTimes();
  return (
    <div className="h-screen  flex  flex-col justify-center items-center">
      {date.justDate ? (
        <div className="flex gap-4">
          {times?.map((time, i) => (
            <div key={`time -${i}`} className="rounded-sm p-2 bg-gray-100">
              <button
                type="button"
                onClick={() => {
                  setDate((prev) => ({ ...prev, dateTime: time }));
                }}
              >
                {format(time, 'kk,mm')}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          view="month"
          onClickDay={(date) =>
            setDate((prev) => ({ ...prev, justDate: date }))
          }
        />
      )}
    </div>
  );
};

export default Calendar;
