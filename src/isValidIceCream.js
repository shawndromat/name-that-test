import joi from '@hapi/joi'

const iceCreamSchema = joi.object().keys({
  name: joi.string().max(24)
})

export default (iceCream) => !iceCreamSchema.validate(iceCream).error
