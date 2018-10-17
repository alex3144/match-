import values from '../data.json';
import  Elo from 'arpad';
import _ from 'lodash';
import update from '../db/pictures/update'
import getAll from '../db/pictures/get'

let elo = new Elo();

export const rate = (params) => {
  return new Promise((resolve) => { 
    let arr = params.values
    if(params.result._id === params.item1._id ) {
      params.item1.score = elo.newRatingIfWon(params.item1.score, params.item2.score);
      params.item1.state = 'up'
      params.item2.score = elo.newRatingIfLost(params.item2.score, params.item1.score);
      params.item2.state = 'down'
    }
    if(params.result._id  === params.item2._id ) {
      params.item2.score = elo.newRatingIfWon(params.item2.score, params.item1.score);
      params.item1.state = 'down'
      params.item1.score = elo.newRatingIfLost(params.item2.score, params.item1.score);
      params.item2.state = 'up'
    }

    update(params.item1)
    .then(()=>{
      return update(params.item1)
    })
    .then(()=>{
      return update(params.item2)
    })
    .then(()=>{
      const index1 = _.findIndex(arr, {_id: params.item1._id});
      arr.splice(index1, 1,  params.item1);
      const index2 = _.findIndex(arr, {_id: params.item2._id});
      arr.splice(index2, 1,  params.item2);
      const newArray = _.sortBy(arr, [function(o) { return o.score; }]).reverse();
      setTimeout(()=>{
        resolve(newArray)
      }, 1000);
    })
  })
}// rate

export const sendDataTofront = () => { 
  return new Promise((resolve) => {
    getAll().then((res)=>{
      const newArray = _.sortBy(res, [function(o) { return o.score; }]).reverse();
      resolve(newArray)
    })
  })
}// sendDataToFront
