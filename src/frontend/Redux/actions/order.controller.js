export function secondSort(data, result, originalResult) {
  if (data === "Original") {
    result = result.filter(e => {
      if (e.isCreated === "true") {
        return
      } else {
        return e;
      }
    })
    return result;
  }
  if (data === "Created") {
    result = result.filter(e => {
      if (e.isCreated === "true") {
        return e;
      }
    })
    return result;
  } else {
    return originalResult;
  }
}



export function sort(resultOriginal, result, data, type) {
  if (data.ord === "Name") {
    if (type.asc === 'Asc') {
      result = result.sort((a, b) => {
        if (a.id && b.id) {
          return a.nameSlug.localeCompare(b.nameSlug)
        }

      })
      return result
    }
    if (type.asc === 'Des') {
      result = result.sort((a, b) => {
        if (a.id && b.id) {
          return a.nameSlug.localeCompare(b.nameSlug)
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