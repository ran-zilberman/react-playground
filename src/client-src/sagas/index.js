/**
 * Created by Ran_Zilberman on 16/05/2016.
 */

import {watchCreateFinancialModel} from './FinancialModel.js'

export default function* rootSaga() {
  yield [
    //helloSaga(),
    watchCreateFinancialModel()
  ]
}
