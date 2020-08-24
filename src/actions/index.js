import { SEARCH_CHANGE, MOVIES_FETCHED, MOVIES_FAILED } from '../types'

export const searchChanged = (text) => {
  return {
    type: SEARCH_CHANGE,
    payload: text
  }
}

export const getMovies = (text) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({ type: MOVIES_FETCHED, payload: success })
    return success
  }
  function onError(error) {
    dispatch({ type: MOVIES_FAILED, error })
  }
  try {
    const URL = `http://api.tvmaze.com/search/shows?q=${text}`
    const res = await fetch(URL, { method: 'GET' })
    const success = await res.json()
    console.log('success', success)
    return onSuccess(success)
  } catch (error) {
    return onError(error)
  }
}
