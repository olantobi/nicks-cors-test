function main() 
{
    console.log("main function");
    console.log("ajax request to the resource which will require cors enabled");
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODk4OVwvdjFcL3Nzb1wvbG9naW4iLCJpYXQiOjE1ODEwMTU4NTgsImV4cCI6MTU4MTAxOTQ1OCwibmJmIjoxNTgxMDE1ODU4LCJqdGkiOiJSWUs1Uk5VczhOSDlUbGdOIiwic3ViIjoyLCJwcnYiOiJlZjhiZDI1NDE5OWE0ZGY4MTFiZTZjOGRkODNlNTE1YjFiZWM2M2RjIiwiZmlyc3RfbmFtZSI6IlRvYmkiLCJsYXN0X25hbWUiOiJPbGEiLCJ1c2VybmFtZSI6Im9sYW50b2JpQGdtYWlsLmNvbSIsImVtYWlsIjoib2xhbnRvYmlAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwicm9sZV9pZCI6Mn0.yp4yRTZC-gJzDUuaMladpLJ9yLS38qjzcd07eaUdU-c";
    $.ajax
    ({
        dataType: "json",
        headers: {
            'Authorization':'Bearer '+ token,
            'Content-Type':'application/json'
        },
        url: "http://localhost:8989/v1/sso/me",
        method: 'GET',
        dataType: 'json',
        success: function(data) 
        {
            console.log("log response on success");
            console.log(data);
        }
    });
}