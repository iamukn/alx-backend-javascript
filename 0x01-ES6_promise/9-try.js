export default function guardrail(mathFunction) {
  var queue = [];
  try {
   const res = mathFunction();
   queue.push(res);
  } catch (e) {
    queue.push(`Error: ${e}`);
  } finally {
    queue.push('Guardrail was processed')
  }
return queue;
}
