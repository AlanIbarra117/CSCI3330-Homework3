$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    // Dynamically insert dashboard information

    $("#username").text(username);
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);
    $("#notification-num").text(notifAmt);

    // Dynamically create the sales table
    
    sales.forEach(function (sale) {
        const row = $("<tr>");

        row.append($("<td>").text(sale.product));
        row.append($("<td>").text(sale.quantity));
        row.append($("<td>").text(sale.revenue));

        $("#salesTableBody").append(row);
    });

    // Dynamically create the activity list
  
    activities.forEach(function (activity) {
        const item = $("<li>").text(activity.message);

        $("#activity-list").append(item);
    });

    // Dynamically create the customer table
    
    customers.forEach(function (customer) {
        const row = $("<tr>");

        const name = $("<td>").text(customer.name);
        const email = $("<td>").text(customer.email);

        const statusCell = $("<td>");
        const status = $("<span>")
            .addClass("status")
            .text(customer.status);

        if (customer.status === "Active") {
            status.addClass("status-active");
        } else if (customer.status === "Pending") {
            status.addClass("status-pending");
        }

        statusCell.append(status);

        const joined = $("<td>").text(customer.joined);

        row.append(name);
        row.append(email);
        row.append(statusCell);
        row.append(joined);

        $("#customerTableBody").append(row);
    });

    // Dynamically create system status messages

    messages.forEach(function (message) {
        const item = $("<li>").text(message.messsage);

        $("#system-status-list").append(item);
    });

    // Dynamically create notifications

    notifications.forEach(function (notification) {
        const item = $("<li>").text(notification.messsage);

        $("#notifications-list").append(item);
    });

    // Dynamically create tasks
    
    tasks.forEach(function (task) {
        const item = $("<li>").text(task.messsage);

        $("#tasks-list").append(item);
    });

    // Convert all HTML buttons into jQuery UI Button Widgets
    
    $("button").button();

    // Convert dashboardTabs into a jQuery UI Tabs Widget

    $("#dashboardTabs").tabs();

    // Convert customerDialog into a jQuery UI Dialog Widget
   
    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 450,

        buttons: {
            "Create Customer": function () {

                var name = $("#customerName").val();
                var email = $("#customerEmail").val();

                if (!name || !email) {
                    alert("Please enter a name and email.");
                    return;
                }

                alert("Customer created: " + name);

                $(this).dialog("close");
            },

            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    // Convert accordion into a jQuery UI Accordion Widget

    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    // Open customer dialog when New Customer is clicked

    $("#newCustomerButton").on("click", function () {
        $("#customerDialog").dialog("open");
    });

    // Convert customerDate into a jQuery UI Datepicker
    
    $("#customerDate").datepicker();
       


    });