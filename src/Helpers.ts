import { Fetchop } from './Fetchop';
import { type HelperCompareObject, type HelperObject, HelpersInterface, Method, type AttributeMethods } from './types';

/**
 * This class is used to help the user to get some information about the Fetchop class.
 */
class Helpers implements HelpersInterface {
  private $fetchop: Fetchop = new Fetchop();

  constructor(fetchop?: Fetchop) {
    if (fetchop) this.$fetchop = fetchop;
  }

  /**
   * Return the default configuration of the Fetchop class.
   */
  getDefaultAttributes(natural: boolean = false): HelperObject {
    return this.formatAttributesObject(new Fetchop(), natural);
  }

  /**
   * Return an array containing all the attributes with a boolean value to know if the current value is different from the default value.
   */
  compareCurrentToDefault(): HelperCompareObject {
    let current: HelperObject = this.getCurrentAttributes();
    let defaults: HelperObject = this.getDefaultAttributes();
    let keys: string[] = Object.keys(current);
    let currentValues: any[] = Object.values(current);
    let defaultValues: any[] = Object.values(defaults);
    let compared: { [key: string]: boolean } = {};
    keys.forEach((key, index) => {
      if (currentValues[index].value !== null && typeof currentValues[index].value === 'object') {
        compared[key] = JSON.stringify(currentValues[index].value) !== JSON.stringify(defaultValues[index].value);
        return;
      }
      compared[key] = currentValues[index].value !== defaultValues[index].value;
    });
    return compared;
  }

  /**
   * Return methods that are allowed by the Fetchop class.
   */
  getAllowedMethods(object: boolean = false): string[] | HelperObject {
    return object ? this.formatAttributesObject(Method) : Object.values(Method);
  }

  /**
   * Return the current configuration of the Fetchop class.
   */
  getCurrentAttributes(natural: boolean = false): HelperObject {
    return this.formatAttributesObject(this.$fetchop, natural);
  }

  /**
   * Return the getter and setter methods of the given key.
   */
  getAttributeMethods(key: string): AttributeMethods {
    return {
      getter: 'get' + key.charAt(0).toUpperCase() + key.slice(1),
      setter: 'set' + key.charAt(0).toUpperCase() + key.slice(1)
    };
  }

  parseUri(
    uri: string,
    baseUrl: string | null,
    defaultMethod: string
  ): {
    method: string;
    url: string;
  } {
    let method: string = defaultMethod;
    let path: string = baseUrl ?? '';
    if (uri.split('::').length === 2) {
      [method, path] = uri.split('::');
      if (this.getAllowedMethods().includes(method.toUpperCase())) {
        method = method.toUpperCase();
      } else {
        throw new Error('The given method is not allowed.');
      }
      if (baseUrl !== null) {
        path = baseUrl + path;
      }
    } else {
      if (baseUrl !== null) {
        uri = baseUrl + uri;
      }
      if (!uri.startsWith('http://') && !uri.startsWith('https://')) throw new Error('The given URI is not valid.');
      path = uri;
    }
    return {
      method: method,
      url: path
    };
  }

  /**
   * Return attributes of the given object (new Fetchop or this).
   */
  private formatAttributesObject(object: { [key: string]: any }, natural: boolean = false) {
    let keys: string[] = Object.keys(object);
    let values: any[] = Object.values(object);
    let formatted: HelperObject = {};
    keys.forEach((key, index) => {
      if (natural) {
        formatted[key] = values[index];
        return;
      }
      formatted[key] = {
        value: values[index],
        type: typeof values[index]
      };
    });
    return formatted;
  }
}

export default Helpers;
