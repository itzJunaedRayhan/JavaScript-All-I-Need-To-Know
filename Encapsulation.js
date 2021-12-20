//  এনক্যাপসুলেশনঃ   যে প্রক্রিয়ায় ডাটা ও ফাংশন গুলোকে একত্রিত করে ক্লাস তৈরি করা যায় এবং ডাটা এবং ফাংশন গুলোকে বাইরের অবাঞ্চিত এক্সেস হতে রক্ষা করা যায় তাকে এনক্যাপসুলেশন বলে।
//  Encapsulation:

class Employee {
    setEmployeeDetails (name, id, phoneNo) {
        this.name = name;
        this.id   = id;
        this.phoneNo = phoneNo;
    }

    getEmpName () {
        return this.name;
    }

    getEmpId () {
        return this.id;
    }

    getEmpPhoneNo () {
        return this.phoneNo;
    }
}

let emp = new Employee ();
emp.setEmployeeDetails("John", 202131061036, "01792138331");
console.log(emp.getEmpName());
console.log(emp.getEmpId());
console.log(emp.getEmpPhoneNo());