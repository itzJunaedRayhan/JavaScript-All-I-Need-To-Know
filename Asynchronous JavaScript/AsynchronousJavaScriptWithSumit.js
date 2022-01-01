//  Asynchronous JavaScript 
    //  Using Callback function
    const takeOrder = (customer, callback) => {
        console.log(`take Order for ${customer}`);
        callback(customer);     //  processOrder Function
    }
    //  Processing Order
    const processOrder = (customer, callback) => {
        console.log (`Processing Order for ${customer}`);
        setTimeout(() => {
            console.log(`Cooking Completed`);
            console.log(`Order processed for ${customer}`);
            callback(customer);     //  completeOrder Function
        }, 3000);
    }
    //  Complete Order
    const completeOrder = (customer) => {
        console.log(`completed order for ${customer}`);
    }
    //  Function Calling
    takeOrder("customer 1", (customer) => {
        processOrder(customer, (customer) => {
            completeOrder(customer);
        });
    });

    console.log(`Hello`);





//  Using Promise
    const hasMeeting = false;
    const meeting = new Promise((resolve, reject) => {
        if (!hasMeeting) {
            const meetingDetails = {
                name : "Technical Meeting",
                location : "Google Meet",
                time :  "10.00 PM"
            }
            resolve(meetingDetails);
        } else {
            reject(new Error("Meeting already scheduled!"));
        }
    });

    const addToCalendar = (meetingDetails) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
    }

/*
    meeting
    .then(addToCalendar)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message);
    })
    console.log("Hello World");
*/

    //  instead of using commented coad we can use async/await 
    async function myMeeting () {
        try {
            const meetingDetails = await meeting;
            const caleder = await addToCalendar(meetingDetails);
            console.log(caleder);
        } catch {
            console.log("Something Wrong happend");
        }
    }
    myMeeting();