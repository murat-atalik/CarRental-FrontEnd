import { ResponseModel } from '../responseModel';
import { CustomerDetailDto } from './customerDetailDto';

export interface CustomerDetailDtoResponseModel extends ResponseModel {
  data: CustomerDetailDto[];
}
