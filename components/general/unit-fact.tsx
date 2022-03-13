
import {unitFactModel} from '../../data-access';

export interface UnitFactProps {
  heading?: string,
  textClass?: string,
  headingSize?: string,
  backgroundColor?: string,
  model: unitFactModel
}

export function UnitFact({ heading, textClass, headingSize, backgroundColor, model }: UnitFactProps) {

  let flexBasisMobile = 'basis-1/3';

  if (backgroundColor == 'bg-white') {
    flexBasisMobile = 'basis-1/2';
  }

  return (
    <div className={`${backgroundColor} ${flexBasisMobile} md:flex-1 text-center p-2.5 flex flex-col justify-center `}>
      {
        headingSize === 'h2'
          ?
          <h2 className="text-xs">
            {heading}
          </h2>
          :
          <h3 className="text-xs">
            {heading}
          </h3>
      }

      <p className={`${textClass} font-bold`}>
        {model.valueText}
      </p>
    </div>
  )
}
