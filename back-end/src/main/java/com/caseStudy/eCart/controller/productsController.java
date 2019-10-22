package com.caseStudy.eCart.controller;

import com.caseStudy.eCart.Respository.productsRespositry;
import com.caseStudy.eCart.modals.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class productsController {
@Autowired
productsRespositry p;

@GetMapping("/notes")
public List<Products> getAllNotes()
{
    return p.findAll();
}
@PostMapping("/addproducts")
    public Products createNode(@Valid @RequestBody Products p1)
{
    return p.save(p1);
}
@GetMapping("/notes/{id}")
    public Products getByid(@PathVariable(value="id")int noteId)

{
    return p.findByProductid(noteId);
}
@GetMapping("/products/category/{category}")
    public List<Products> getnodebyCategory(@PathVariable(value="category")String category)
{
    return p.findByCategory(category);
}

@GetMapping("/getByPrice/{price1}/{price2}")
    public List<Products> getProductByPrice(@PathVariable(value="price1")int  p_price1,@PathVariable(value="price2")int p_price2)
{
    return p.findAllByProductPriceBetween(p_price1,p_price2);

}


    @GetMapping("/getByPriceandcat/{price1}/{price2}/{category}")
    public List<Products> getProductByPriceAndCategory(@PathVariable(value="price1")int  p_price1,@PathVariable(value="price2")int p_price2,@PathVariable(value="category")String category)
    {
        return p.findAllByProductPriceBetweenAndCategory(p_price1,p_price2,category);

    }
}
