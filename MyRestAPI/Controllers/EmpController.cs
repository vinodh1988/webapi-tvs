using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MyRestAPI.Models;

namespace MyRestAPI.Controllers
{
    public class EmpController : ApiController
    {
        private dsourcesEntities db = new dsourcesEntities();

        [ActionName("DefaultAction")]
        // GET: api/Emp
        public IQueryable<Employee_tab> GetEmployee_tab()
        {
            return db.Employee_tab;
        }

        // GET: api/Emp/5
        [ActionName("DefaultAction")]
        [ResponseType(typeof(Employee_tab))]
        public IHttpActionResult GetEmployee_tab(decimal id)
        {
            Employee_tab employee_tab = db.Employee_tab.Find(id);
            if (employee_tab == null)
            {
                return NotFound();
            }

            return Ok(employee_tab);
        }

        // PUT: api/Emp/5
        [ActionName("DefaultAction")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEmployee_tab(decimal id, Employee_tab employee_tab)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != employee_tab.employee_id)
            {
                return BadRequest();
            }

            db.Entry(employee_tab).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Employee_tabExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [ActionName("DefaultAction")]
        // POST: api/Emp
        [ResponseType(typeof(Employee_tab))]
        public IHttpActionResult PostEmployee_tab(Employee_tab employee_tab)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Employee_tab.Add(employee_tab);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Employee_tabExists(employee_tab.employee_id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = employee_tab.employee_id }, employee_tab);
        }

        [ActionName("DefaultAction")]
        // DELETE: api/Emp/5
        [ResponseType(typeof(Employee_tab))]
        public IHttpActionResult DeleteEmployee_tab(decimal id)
        {
            Employee_tab employee_tab = db.Employee_tab.Find(id);
            if (employee_tab == null)
            {
                return NotFound();
            }

            db.Employee_tab.Remove(employee_tab);
            db.SaveChanges();

            return Ok(employee_tab);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Employee_tabExists(decimal id)
        {
            return db.Employee_tab.Count(e => e.employee_id == id) > 0;
        }
    }
}