import mongoose from "mongoose"

const orderSchema = mongoose.Schema({

   
     user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User",
        },

        orderItems:[
            {
                name:{type:String, required:true},
                qty:{type:Number, required:true},
                image:{type:String, required:true},
                price:{type:String, required:true},
                product:{
                    type:mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref:"Product",
                },
            },
        ],

        shippingAdress:{
            adress :{type:String, required:true},
            city :{type:String, required:true},
            postalcode :{type:String, required:true},
            country :{type:String, required:true},
        },
        paymentResult:{
            id:{type:String},
            status : {type:String},
            updateTime:{type:String},
            emailAdress:{type:String},
        },

        taxPrice :{
            type:Number,
            required:true,
            default:0.0,
        },
        shippingPrice : {
            type: Number,
            required : true,
            default:0.0, 
        },

        totalPrice: {
            type:Number,
            required:true,
            default:0.0,
        },

        isPaid:{
             type:Boolean,
             required:true,
             default:true,
        },

        paidAt:{
            type:Date,
        },

        isDelivered :{  
            type:Boolean,
            required:true,
            default:false
        },

        deliveredAt:{
            type:Date,
        },

}, {
    timestamps: true,
})

const Order = mongoose.model("Order",orderSchema)

export default Order