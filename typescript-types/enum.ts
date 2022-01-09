enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month:Month) {
    let isSummer:boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer
}

console.log(isItSummer(Month.Jul));

console.log(Month[9]);

enum Days {
    'Monday' = 1,
    'Thuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
};

console.log(Days[2]);

//example
//use of Enum on your code
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

console.log(ApprovalStatus.draft);

const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}
