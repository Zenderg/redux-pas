export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_ERROR = 'GET_PHOTOS_ERROR'

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })

    getAllPhotos(dispatch, year)
  }
}

function getAllPhotos(dispatch, year, offset = 0, acc = []) {
  try {
    //eslint-disable-next-line no-undef
    VK.Api.call(
      'photos.getAll',
      { extended: 1, count: 200, offset: offset, v: '5.80' },
      r => {
        const photos = [...acc, ...r.response.items]
        const count = r.response.count

        if (count === offset) {
          return getAllPhotos(dispatch, year, offset + 200, photos)
        }

        const sortPhotos = filterPhotos(photos, year)

        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: sortPhotos,
        })
      }
    )
  } catch (e) {
    dispatch({
      type: GET_PHOTOS_ERROR,
      error: true,
      payload: new Error('Ошибка получения фотографий'),
    })
  }
}

function filterPhotos(photos, year) {
  const truePhotos = photos.filter(
    item => year === new Date(item.date * 1000).getFullYear()
  )

  truePhotos.sort((a, b) => b.likes.count - a.likes.count)

  return truePhotos
}
