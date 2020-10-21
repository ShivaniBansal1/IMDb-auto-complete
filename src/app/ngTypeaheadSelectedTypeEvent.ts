export interface NgbTypeaheadSelectItemEvent<T = any> {
    /**
     * The item from the result list about to be selected.
     */
    item: T;
  
    /**
     * Calling this function will prevent item selection from happening.
     */
    preventDefault: () => void;
  }