DROP TABLE IF EXISTS mytable;


select  c.company_code,c.founder,
(select count(*) from Lead_Manager where company_code=c.company_code  ) ,
(select count(*) from Senior_Manager where company_code=c.company_code  ),
(select count(*) from Manager where company_code=c.company_code  ),
(select count(*) from Employee  where company_code=c.company_code  )


from  Company as c order by c.company_code


select continent, (sum(ci.population)/count(ci.id)) as average_city_population
from country as co
inner join city as ci
on ci.CountryCode = co.Code
group by continent;

                   
                   
select h.hacker_id, h.name, sum(s.highscores) from hackers as h
inner join(
    select hacker_id, challenge_id, max(score) as highscores from submissions as s
    group by hacker_id, challenge_id
) as s
on s.hacker_id = h.hacker_id
group by h.hacker_id, h.name
having sum(s.highscores) > 0
order by
sum(s.highscores) desc, h.hacker_id;


select h.hacker_id, h.name, count(h.hacker_id) from Hackers as h
inner join Challenges as c
on h.hacker_id = c.hacker_id
group by h.hacker_id, h.name
order by count(h.hacker_id) desc,
h.hacker_id,
case when count(h.hacker_id) < 
(select max(challenges_created)
from
(select h.hacker_id, h.name, count(h.hacker_id) as challenges_created  from Hackers as h
inner join Challenges as c
on h.hacker_id = c.hacker_id
group by h.hacker_id, h.name
) as h )
then null else h.hacker_id end;  



let input = [1,0,2,3,0,4,5,0]
let output =  [1,0,0,2,3,0,0,4]

function subfunction(arr){
  let lastIndex = arr.length-1
  arr.unshift(0)
  return arr.slice(0,lastIndex)
}

function duplicateZero(arr){
  let i = 0
  while (i < arr.length){
    // console.log(arr)
    if (arr[i] === 0){
      console.log(i)

      arr.splice(0,i)
      arr.push(...subfunction(arr.slice(i,arr.length)))
    }
    i++
  }
  return arr
}


// console.log(duplicateZero(input))

console.log(subfunction(input))