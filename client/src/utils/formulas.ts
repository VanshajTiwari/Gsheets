
type ValueType=any[] | undefined;

// Helper function to convert row and column index to cell name

const funcList: string[] = ["SUM", "AVERAGE", "MIN", "MAX"];

export function executeFunction(v: ValueType, Ids: any) {
    const values :any = isFormula(v, Ids);
    if (values.isFormula) {
      const cellReferencePattern = /[A-Z]+\d+/g;
      const matches = values.data.match(cellReferencePattern);
      const formulaMatch = funcList.find((formula) =>
        values.data.toUpperCase().startsWith(`=${formula}(`)
      );
      values.matches=matches;
  
      if (formulaMatch) {
        switch (formulaMatch) {
          case "SUM":
             return {...values,formulaType:"SUM"};
            // return handleSum(values.data, Ids);
          case "AVERAGE":
            return {...values,formulaType:"AVERAGE"};
          case "MIN":
            return {...values,formulaType:"MIN"};
          case "MAX":
            return {...values,formulaType:"MAX"};
          default:
            console.error("Unknown formula:", formulaMatch);
            break;
        }
    }
    return values;
    }
    else
        return values;
      
  }
  export function evaluate(formulaType: string, val: string[]): number | string {
    // Parse the string values in the val array to numbers
    const numericValues = val.map((v) => parseFloat(v)).filter((v) => !isNaN(v));
  
    if (numericValues.length === 0) {
      return "#NaN"; // Return an error if no valid numeric values are found
    }
  
    // Perform the operation based on the formulaType
    switch (formulaType) {
      case "SUM":
        return numericValues.reduce((sum, num) => sum + num, 0);
  
      case "AVERAGE":
        return numericValues.reduce((sum, num) => sum + num, 0) / numericValues.length;
  
      case "MIN":
        return Math.min(...numericValues);
  
      case "MAX":
        return Math.max(...numericValues);
  
      default:
        return "#InvalidFormulaType"; // Return error for unsupported formulaType
    }
  }
  
export function isFormula(v:ValueType,Ids:any) {
    // console.log(v,Ids);
    let curVal="";
    v?.forEach(element => {
        curVal+=element.insert.replace(/\n/g,'');
    }); 
    return {data:curVal,isFormula:curVal.startsWith('='),cellId:Ids?.cellId??""};
}
