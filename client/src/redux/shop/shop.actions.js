import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = err => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: err
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");

    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(err => {
        dispatch(fetchCollectionsFailure(err.message));
        throw Error;
      });
  };
};
