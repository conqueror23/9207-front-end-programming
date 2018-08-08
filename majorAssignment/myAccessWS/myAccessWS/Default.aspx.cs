using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.OleDb;

public partial class _Default : System.Web.UI.Page
{
    OleDbConnection conn = null;
    OleDbCommand cmd = null;
    OleDbDataReader reader = null;
    string sqlCommand;
    protected void Button1_Click(object sender, EventArgs e)
    {
        
        try
        {
            conn = new OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0; Data Source="
                                + Server.MapPath("pcparts.accdb"));
            conn.Open();
            sqlCommand = "SELECT * FROM customers WHERE username='";
            sqlCommand = sqlCommand + txtUserName.Text;
            sqlCommand = sqlCommand + "' AND psw='" + txtPassword.Text+"'";
            //lblStatus.Text = sqlCommand;
            cmd = new OleDbCommand(sqlCommand, conn);
            reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                Session["loggedIn"] = "true";
                Session["username"] = reader["username"];
                //lblStatus.Text = "Logged in successfully! ";
                Response.Redirect("showOrders.aspx");
            }
            else
            {
                Session["loggedIn"] = "false";
                lblStatus.Text = "Not authorised: incorrect Username and/or Password";
            }


        }
        catch (Exception ex)
        {
            lblStatus.Text ="An error occured: "+ ex.Message;
        }
        finally
        {
            if (reader!=null)
             reader.Close();
            if (conn!=null)
             conn.Close();
        }

    }
    protected void Button2_Click(Object sender,EventArgs s)
    {
        
        Response.Redirect("register.aspx");
    }
}