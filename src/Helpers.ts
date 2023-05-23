import { Fetchop } from './Fetchop';
import { type FetchopAttributes, HelpersInterface, Method } from './types';

/**
 * This class is used to help the user to get some information about the Fetchop class.
 */
class Helpers implements HelpersInterface {
  //#region Default Methods
  /**
   * Return the default configuration of the Fetchop class.
   */
  getDefaultsAttributes(): FetchopAttributes {
    return this.formatAttributesObject(new Fetchop());
  }

  /**
   * Return the default methods allowed by the Fetchop class.
   */
  getDefaultsMethods(): string[] {
    return Object.values(Method);
  }
  //#endregion

  /**
   * Return attributes of the given object (new Fetchop or this).
   */
  private formatAttributesObject(object: any) {
    let keys = Object.keys(object);
    let values = Object.values(object);
    let $default: any = {};
    keys.forEach((key, index) => {
      $default[key] = {
        value: values[index],
        type: typeof values[index]
      };
    });
    return $default;
  }
}

export default Helpers;
