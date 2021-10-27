export function secondSort(data, result, originalResult) {
  if (data === "Original") {
    return originalResult;
  }
  if (data === "Created") {
    return result;
  } else {
    return originalResult;
  }
}



export function sort(resultOriginal, result, data, type) {
  if (data.ord === "Name") {
    if (type.asc === 'Asc') {
      result = result.sort((a, b) => {
        if(a){
          if (a.id && b.id) {
            return a.nameSlug.localeCompare(b.nameSlug)
          } else{
            return []
          }
        } else {
          return []
        }
        

      })
      return result
    }
    if (type.asc === 'Des') {
      result = result.sort((a, b) => {
        if (a.id && b.id) {
          return a.nameSlug.localeCompare(b.nameSlug)
        } else{
          return []
        }
      })
      return result.reverse()
    } else {
      return resultOriginal
    }
  }
  if (data.ord === "Rating") {
    if (type.asc === 'Asc') {
      result = result.sort((a, b) => a.rating - b.rating);
      return result
    }
    if (type.asc === 'Des') {
      result = result.sort((a, b) => a.rating - b.rating);
      return result.reverse()
    } else {
      return resultOriginal
    }
  } else {
    return resultOriginal;
  }
}