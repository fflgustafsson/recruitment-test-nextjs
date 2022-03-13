import {AreaUnit, Unit, Currency} from 'data-access'
export class unitFactModel {
  type: UnitFactModelType;
  private unit: Unit;
  private value?: number;
  

  get valueText(): string {
    
    switch (+this.type) {
      case UnitFactModelType.Currency:
        return this.formatCurrency(this.unit.currency, this.value);
        break;
      case UnitFactModelType.Area:
       return this.formatArea(this.unit.livingAreaUnits, this.value);
        break;
      case UnitFactModelType.Integer:

        return (this.value || 0).toString();
        break;
    }

    return '';
    
  }

  constructor(type: UnitFactModelType,unit: Unit, value?: number ) {
    this.type = type;
    this.unit = unit;
    this.value = value;
  }

  private formatArea = function(livingAreaUnits?: AreaUnit, value?: number): string {
    switch (livingAreaUnits) {
      case AreaUnit.M2:
        return value + ' ' + AreaUnit.M2;
      case AreaUnit.Ft2:
        return value + ' ' + AreaUnit.Ft2;
      default:
        return '';
    }
  }

  private formatCurrency = function(currency?: Currency, value?: number): string {
    if (currency == "USD") {
      return "$" + value;
    } else {
      return '';
    }
  }
}

export const enum UnitFactModelType {
  Currency,
  Area,
  Integer
}

