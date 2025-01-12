import fx from "@/assets/img/fx.jpeg";
import { useSheet } from "@/hooks/useSheet";
import { evaluate, executeFunction, isFormula } from "@/utils/formulas";
import { useEditable } from "@chakra-ui/react";
import Quill from "quill";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function FormulaForX(){
    const {quill,highLightCells,changeTextOnFormula,showFormulaCells,selectedCell,convertVirToCellId,getClickedCellAndRow,getCellById}=useSheet();
    const [inputValue, setInputValue] = useState<string>(''); // Default to an empty string
    const [isValid,setValid]=useState(true);
    const handleInputChange = (v:string) =>{
        setInputValue(v);
    };
    let values=getCellById(selectedCell?.cellId);
    const processed=executeFunction(values?.content,getClickedCellAndRow);
    useEffect( ()=>{
      if(values?.text)
        handleInputChange(values?.text);
      else{
        handleInputChange("");
      }
    })
    useEffect(() => {
      
        // Ensure all required values exist
        if (getClickedCellAndRow && processed?.matches?.length > 0) {
          const valsofCorrespondingCell = convertVirToCellId(processed.matches);

          if(valsofCorrespondingCell.cellIds.includes(selectedCell?.cellId)){
            toast.error("Circular dependency detected.");
            setValid(false);
          }
          else{
            setValid(true);
          }
          showFormulaCells(valsofCorrespondingCell.cellIds);
          // console.log(highLightCells);
          if (
            processed?.formulaType &&
            valsofCorrespondingCell?.cellsData &&
            values?.text?.charAt(values.text.length - 2) === ')' &&
            isValid
          ) {
            const content = evaluate(processed.formulaType, valsofCorrespondingCell?.cellsData);
  
            if (selectedCell?.cellId) {
              const updatedContent = {
                ...values, 
                text: String(content), // Update `text`
                content: [{ insert: String(content) }], // Update `content`
              };
  
              try {(async () => {
                if(quill)
                  await changeTextOnFormula(quill, updatedContent);

                // console.log(selectedCell);

              })();
              } catch (error) {
                console.error("Error updating cell content:", error);
              }
            }
          }
        }
        else{
          showFormulaCells([]);
        }
      
    }, [values?.text]);
  
  
    
    // Call updateStaticVal to keep staticVal updated with the latest value from cellId
    return (
      <div className="flex items-center w-full">
        <div className="w-1/16 pl-2 pb-1 flex items-center">
          <span className="min-w-[90px] flex border-r border-gray-800">
            {getClickedCellAndRow?.virtualId}</span>
  
        </div>
        <div className="w-11/12 flex pl-2 items-center">
             <div className="w-1/12 bg-red-400 max-w-[20px] max-h-[20px]">
              <img src={fx} className=""/>
              </div>
              {
             <input  type="text" name="formulaforx" value={inputValue} className=" pr-4 w-full outline-none" onChange={handleInputChange} />}
        </div>
      </div>
    )
  }