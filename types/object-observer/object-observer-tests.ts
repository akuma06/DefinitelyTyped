import Observable = require('object-observer');

const order = { type: 'book', pid: 102, ammount: 5, remark: 'remove me' };
const observableOrder = Observable.from(order);

observableOrder.observe(changes => {
    changes.forEach(change => {
        console.log(change);
    });
});

observableOrder.ammount = 7;

observableOrder.address = {
    street: 'Str 75',
    apt: 29
};

observableOrder.address.apt = 30;

delete observableOrder.remark;
