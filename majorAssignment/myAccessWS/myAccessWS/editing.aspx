<%@ Page Language="C#" AutoEventWireup="true" CodeFile="editing.aspx.cs" Inherits="editing" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <title></title>
    <script>
        $(function () {
            var availableTags = [
                "brand",
                "amount",
                "specs",
                "price"
            ];
            $("#SearchID").autocomplete({
                source: availableTags
            });
            $("#key").autocomplete({
                source: availableTags
            });
        });
        $(function () {
            $(document).tooltip();
        });
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
        <li><a href="Default.aspx">home</a></li>
        <li><a href="register.aspx">registration</a></li>
        <li><a href="editing.aspx">edit orders</a></li>
        <li><a href="showOrders.aspx">show orders</a></li>
    </ul>
    <form id="form1" runat="server">
        <div class="ui-widget">
            Brand:
            <asp:TextBox ID="SearchID" runat="server" title="The key that you want to search for" ></asp:TextBox>
            
            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="search" />
            <br />
           
            <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="true"></asp:GridView>
            <br />

            Inserting data:<br />
            Brand:
            <asp:TextBox ID="brand" runat="server"></asp:TextBox>
            amount:
            <asp:TextBox ID="amount" runat="server"></asp:TextBox>
            specs:
             <asp:TextBox ID="specs" runat="server"></asp:TextBox>
            price:
             <asp:TextBox ID="price" runat="server"></asp:TextBox>
             
            <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="Upload record" />
            <br />
            <asp:Label ID="user_info" runat="server"></asp:Label>

        </div>
    </form>
</body>
</html>
