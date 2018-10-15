'use strict';
////console.log(__filename);
import  db from '../mongo-client';
import  schema from './schema';

export default db.model('picture', schema);
