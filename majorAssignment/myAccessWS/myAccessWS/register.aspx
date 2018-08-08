<%@ Page Language="C#" AutoEventWireup="true" CodeFile="register.aspx.cs" Inherits="register" %>

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
  .ui-menu { width: 150px; }
  </style>
</head>
<body>
     <ul id="menu">
        <li class="class="ui-state-enable"><a href="Default.aspx">home</a></li>
        <li><a href="register.aspx">registration</a></li>
        <li><a href="editing.aspx">edit orders</a></li>
        <li><a href="showOrders.aspx">show orders</a></li>
    </ul>
    <form id="form1" runat="server">
        <div>
           
            username:
            <asp:TextBox ID="newAccount" runat="server" Text="" OnTextChanged="newAccount_TextChanged" >acount</asp:TextBox>
            <br />
            password:
            <asp:TextBox ID="newPass" runat="server" Text="" TextMode="Password"></asp:TextBox>
            <br />
            emails:
            <asp:TextBox ID="email" runat="server" ></asp:TextBox>
            <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click" />
            <hr />
             <asp:Label ID="instruction" runat="server">
            </asp:Label>
        </div>
    </form>
</body>
</html>
