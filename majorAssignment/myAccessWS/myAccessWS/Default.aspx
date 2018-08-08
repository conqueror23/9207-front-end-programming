<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

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
    </script>
    <style>
 body{
     background:url(/bg.jpg);
 }
  .ui-menu { width: 150px; }
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
    
        <asp:Label ID="lblStatus" runat="server"></asp:Label>
        <br />
        <asp:Label ID="Label2" runat="server" Text="Username:"></asp:Label>
&nbsp;<asp:TextBox ID="txtUserName" runat="server"></asp:TextBox>
        <br />
        Password:&nbsp;
        <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
        <br />
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Login" />
        <asp:Button id="Button2" runat="server" OnClick="Button2_Click" Text="Regist Now"/>
    
    </div>
    </form>
</body>
</html>
