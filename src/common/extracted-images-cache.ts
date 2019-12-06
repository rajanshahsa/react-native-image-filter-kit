import { NativeModules } from 'react-native'

const { IFKExtractedImagesCache } = NativeModules

export const cleanExtractedImagesCache = IFKExtractedImagesCache? IFKExtractedImagesCache.clean : null
