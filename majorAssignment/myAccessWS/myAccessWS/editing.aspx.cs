using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.OleDb;

public partial class editing : System.Web.UI.Page
{
    OleDbConnection conn = null;
    OleDbCommand cmd = null;
    OleDbDataReader reader = null;
    OleDbCommand cmd1 = null;
    OleDbCommand cmd2 = null;
    OleDbCommand cmd3 = null;
    OleDbCommand cmd4 = null;
    string sqlCommand1;
    string sqlCommand2;
    string sqlCommand3;
    string sqlCommand4;
    string sqlCommand;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["loggedIn"] == "true")
        {
            user_info.Text = "As an eligiable users you are able to do advanced qurys";
        }
        else
        {
            user_info.Text = "You are not authorised";
            Response.Redirect("Default.aspx");
        }
    }
    protected void Button1_Click(object sender, EventArgs s)
    {
        
        try
        {
            conn = new OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0; Data Source="
                                    + Server.MapPath("pcparts.accdb"));
            conn.Open();
            sqlCommand = "SELECT * FROM orders WHERE brand ='"+SearchID.Text+"' and customerID ='"+Session["username"]+"'";
            cmd = new OleDbCommand(sqlCommand, conn);
            reader = cmd.ExecuteReader();
            GridView1.DataSource = reader;
            GridView1.DataBind();
        }
        catch
        {
            user_info.Text = "No such record exist";
        }
        finally
        {
            if (reader != null)
                reader.Close();
            if (conn != null)
                conn.Close();
        }
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        try
        {
            conn = new OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0; Data Source="
                                    + Server.MapPath("pcparts.accdb"));
            conn.Open();
            sqlCommand1 = "insert into orders (customerID, brand, amount,specs, price) values ('" + Session["username"] + "','" + brand.Text + "','" + amount.Text + "','" + specs.Text + "','" + price.Text + "')";
            cmd1 = new OleDbCommand(sqlCommand1, conn);
            reader = cmd1.ExecuteReader();
        
            sqlCommand4 = "select * from orders where customerID= '" + Session["username"] + "'";
            cmd4 = new OleDbCommand(sqlCommand4, conn);
            reader = cmd4.ExecuteReader();
            GridView1.DataSource = reader;
            GridView1.DataBind();
         
        }
        catch(Exception ex)
        {
            user_info.Text = ex.Message;
        }
        finally
        {
            if (reader != null)
                reader.Close();
            if (conn != null)
                conn.Close();
        }

    }
   /* protected void Button3_Click(object sender,EventArgs e)
    {
        try
        {
            conn = new OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0; Data Source="
                        + Server.MapPath("pcparts.accdb"));
            conn.Open();
            sqlCommand2 = "Delete from orders where '" + key1.Text + "' = '" + value1.Text + "'";
            cmd2 = new OleDbCommand(sqlCommand2, conn);
            reader = cmd2.ExecuteReader();
            user_info.Text = "Data updated";
            sqlCommand = "select * from orders where customerID ='"+Session["username"]+"'";
            cmd = new OleDbCommand(sqlCommand, conn);
            reader = cmd.ExecuteReader();
            GridView3.DataSource = reader;
            GridView3.DataBind();
        }
        catch(Exception ex)
        {
            user_info.Text=ex.Message;
        }
        finally
        {
            if (reader != null)
                reader.Close();
            if (conn != null)
                conn.Close();
        }
    }*/
    /*protected void logout_click(object sender, EventArgs e)
    {
        Session["username"] = null;
    }
    */
}