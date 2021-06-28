import { createStore } from 'redux';
import rootReducer from './../reducer';

const store = createStore(rootReducer)
// actions => action sẽ tạo một hành động để thông báo cho reducer rồi sau đó sẽ
//điều phối reducer và reducer sẽ dựa vào những mô tả của action và cập nhật lại state

export default store;