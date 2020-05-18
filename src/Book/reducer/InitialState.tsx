import {Book} from '../model/Book';
import {v4 as uuidv4} from 'uuid';

export const initialState = [
  {
    id: uuidv4(),
    name: 'A book about Go',
    description: 'This book will teach you how to become a Go ninja',
    isFav: false,
  },
  {
    id: uuidv4(),
    name: 'A book about Python',
    description: 'This book will teach you how to become a Python ninja',
    isFav: false,
  },
  {
    id: uuidv4(),
    name: 'A book about JavaScript',
    description: 'This book will teach you how to become a JavaScript ninja',
    isFav: false,
  },
  {
    id: uuidv4(),
    name: 'A book about Swift',
    description: 'This book will teach you how to become a Swift ninja',
    isFav: false,
  },
  {
    id: uuidv4(),
    name: 'A book about CSS',
    description: 'This book will teach you how to become a CSS ninja',
    isFav: false,
  },
] as Book[];
