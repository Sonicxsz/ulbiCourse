import { ProfileType } from "entities/profile"
import { ValidationErrors } from "shared/types/common"



export const validateProfile = (fields: ProfileType) => {
  if(!fields) return
  const errors = []


  if(!fields.first || !fields.lastname) {
    errors.push(ValidationErrors.NOT_CORRECT_USER_DATA)
  }
  if(Number(fields.age) < 14){
    errors.push(ValidationErrors.NOT_CORRECT_USER_AGE)

  }

  return errors

    
}