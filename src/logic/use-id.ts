// generate uniqe ids for use with aria-labeldby etc..
 
let id = 0
function generateId() {
  return ++id
}

export function useId() {
  return generateId()
}