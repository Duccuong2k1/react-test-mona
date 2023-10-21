export function TitlePriceRow({
    label,
    value,
    classLabel,
    classValue,
  }: {
    label: string;
    value: string | any;
    classLabel?: string;
    classValue?: string;
  }) {
    return (
      <div className="flex flex-row justify-between items-center my-1">
        <div className={` text-black font-normal text-sm ${classLabel}`}>
          {label}
        </div>
        <div className={` text-black font-normal text-sm ${classValue}`}>
          {value}
        </div>
      </div>
    );
  }
  