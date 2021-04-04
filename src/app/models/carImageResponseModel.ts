import { CarImage } from './carImages';
import { ResponseModel } from './responseModel';

export interface CarImageResponseModel extends ResponseModel {
  data: CarImage[];
}
