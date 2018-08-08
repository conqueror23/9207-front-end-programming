<%@ Page Language="C#" AutoEventWireup="true" CodeFile="showOrders.aspx.cs" Inherits="showMarks" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
   <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
        $(function () {
            $("#menu").menu();
        });
        $(function () {
            var handle = $("#custom-handle");
            $("#slider").slider({
                create: function () {
                    handle.text($(this).slider("value"));
                },
                slide: function (event, ui) {
                    handle.text(ui.value);
                }
            });
        });
        $(function () {
            $("#GridView1").draggable();
            $("#droppable").droppable({
                drop: function (event, ui) {
                    $(this)
                        .addClass("ui-state-highlight")
                        .find("p")
                        .html("Dropped!");
                }
            });
        });
    </script>
    <style>
  .ui-menu { width: 150px; }
  #draggable { width: 100px; height: 100px; padding: 0.5em; float: left; margin: 10px 10px 10px 0; }
  #droppable { width: 150px; height: 150px; padding: 0.5em; float: left; margin: 10px; background-color:lightyellow; }
  #custom-handle {
    width: 3em;
    height: 1.6em;
    top: 50%;
    margin-top: -.8em;
    text-align: center;
    line-height: 1.6em;
  </style>
</head>
<body>
     <ul id="menu">
        <li><a href="Default.aspx">home</a></li>
        <li><a href="register.aspx">registration</a></li>
        <li><a href="editing.aspx">edit orders</a></li>
        <li><a href="showOrders.aspx">show orders</a></li>
    </ul>
    <form id="form1" runat="server">
    <div>
        <asp:Label ID="user_info" runat="server"></asp:Label>
    
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="false" >
            <Columns>
                <asp:BoundField DataField="ID" HeaderText="OrderNo" />
                <asp:BoundField DataField="customerID" HeaderText="Customer ID" />
                <asp:BoundField DataField="brand" HeaderText="Brand" />
                <asp:BoundField DataField="amount" HeaderText="amount" />
                <asp:BoundField DataField="specs" HeaderText="Specs" />
                <asp:BoundField DataField="price" HeaderText="Price" />
                
            </Columns>
                
            
        </asp:GridView>
        <br />
        <div id="slider">
  <div id="custom-handle" class="ui-slider-handle"></div>
</div>
        <asp:Button ID="advanced" runat="server" Text="Advanced Query" OnClick="Advance_Click" />
        <br />
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
    
    </div>
        
    <div id="slider"></div>
        <div id="droppable" class="ui-widget-header"></div>
    </form>
</body>
</html>
