/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

const createSchema = (shape: ObjectShape) => yup.object().shape(shape);

export { createSchema };
