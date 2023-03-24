import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const fetchUploadPhoto = createAsyncThunk('storage/fetchUploadPhoto', async(data, thunkAPI) => {
  try {
    const responce = await fetch(data);
    const file = await responce.blob();
    const uid = Date.now().toString();
    const storageRef = ref(storage, uid);
    const result = await uploadBytes(storageRef, file);
    console.log(result);

  } catch (error) {
    return thunkAPI.rejectWithValue(e.message);
  }
})

export const fetchDeldPhoto = createAsyncThunk('storage/fetchDeldPhoto', async(data, thunkAPI) => {
    try {
      const photo = await fetch(data);
      const desertRef = ref(storage, photo);
      await deleteObject(desertRef);
    } catch (error) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })
