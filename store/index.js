import { Model } from "mongoose";

/**
 * Se encarga de lista en base al model
 * @param {Model} model
 * @returns {Array}
 */
export const list = async (model) => await model.find();
