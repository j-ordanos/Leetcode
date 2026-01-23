# Write your MySQL query statement below
SELECT id, 'Root' AS type FROM tree t WHERE p_id IS NULL
UNION
SELECT id, 'Inner' AS type FROM tree t WHERE EXISTS(SELECT 1 FROM tree WHERE p_id = t.id) AND p_id IS NOT NULL
UNION
SELECT id, 'Leaf' AS type FROM tree t WHERE NOT EXISTS(SELECT 1 FROM tree WHERE p_id = t.id) AND p_id IS NOT NULL