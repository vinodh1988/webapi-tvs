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
    public class supplymastersController : ApiController
    {
        private dsourcesEntities3 db = new dsourcesEntities3();

        // GET: api/supplymasters
        [HttpGet]
        public IQueryable<supplymaster> All()
        {
            return db.supplymasters;
        }

     

        [HttpGet]
        public IQueryable<object> GroupProduct() {
            var result = from products in db.supplymasters
                         group products by products.productcode into data
                         select new
                         {
                             ProductCode = data.Key,
                             Expense= data.Sum(x=>x.cost),
                             Units=data.Sum(x=>x.qty)

                         };
            return result;

        }
        [HttpGet]
        public IQueryable<object> GetFew() {
            var result = from products in db.supplymasters
                         where products.qty > 20
                         select new
                         {
                             Sno = products.sno,
                             Quantity = products.qty,
                             Cost = products.cost
                         };
            return result;
        }
        // GET: api/supplymasters/5
        [HttpGet]
        [ResponseType(typeof(supplymaster))]
        public IHttpActionResult All(double id)
        {
            supplymaster supplymaster = db.supplymasters.Find(id);
            if (supplymaster == null)
            {
                return NotFound();
            }

            return Ok(supplymaster);
        }

        // PUT: api/supplymasters/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult Update(double id, supplymaster supplymaster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != supplymaster.sno)
            {
                return BadRequest();
            }

            db.Entry(supplymaster).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!supplymasterExists(id))
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

        [HttpPost]
        // POST: api/supplymasters
        [ResponseType(typeof(supplymaster))]
        public IHttpActionResult Add(supplymaster supplymaster)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.supplymasters.Add(supplymaster);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (supplymasterExists(supplymaster.sno))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = supplymaster.sno }, supplymaster);
        }

        [HttpDelete]
        // DELETE: api/supplymasters/5
        [ResponseType(typeof(supplymaster))]
        public IHttpActionResult Delete(double id)
        {
            supplymaster supplymaster = db.supplymasters.Find(id);
            if (supplymaster == null)
            {
                return NotFound();
            }

            db.supplymasters.Remove(supplymaster);
            db.SaveChanges();

            return Ok(supplymaster);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool supplymasterExists(double id)
        {
            return db.supplymasters.Count(e => e.sno == id) > 0;
        }
    }
}