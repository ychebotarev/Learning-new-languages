/*
4. Your job is to arrange n ill-behaved children in a straight line, facing front. You
are given a list of m statements of the form “i hates j”. If i hates j, then you do not
want put i somewhere behind j, because then i is capable of throwing something
at j.
(a) Give an algorithm that orders the line, (or says that it is not possible) in
O(m + n) time.

(b) Suppose instead you want to arrange the children in rows such that if i hates
j, then i must be in a lower numbered row than j. Give an efficient algorithm
to find the minimum number of rows needed, if it is possible.
*/

function Relation(name)
{
    this.name =  name;
    this.hates = []
    this.hated = 0
};

Relation.prototype.add_hate_relation = function(person)
{
    this.hates.push(person.name)
    person.hated +=1
    
};


var solve = function(relations)
{
	var all_childrens = {}
    for(var i =0; i< relations.length; ++i){
        child_name = relations[i][0];
        child_hates = relations[i][1];

        if !(child_name in all_childrens){
            all_childrens[child_name] = Relation(child_name);
        }
        if !(child_hates in all_childrens){
            all_childrens[child_hates] = Relation(child_hates);
        }
            
		all_childrens[child_name].add_hate_relation(all_childrens[child_hates])

    }
    
    order = []
    for c in Object.keys(all_childrens){
        if (all_childrens[c].hated == 0){
            order.push(c.name)
        }
    }
    
    var i = 0;
    
    while (i<order.length){
        for n in all_childrens[order[i]].hates{
            h = all_childrens[n]
            h.hated -=1
            if h.hated == 0:
            order.push(h.name)
        }
        ++i;
    }
    
    return order;
};

result = solve([["a","b"],["a","c"],["c","b"]])

console.log(result)