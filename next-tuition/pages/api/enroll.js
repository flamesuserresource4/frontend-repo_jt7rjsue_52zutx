export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).send('Method not allowed')
  // Placeholder: integrate Stripe/Razorpay here. For now, just redirect back.
  if(req.headers['content-type']?.includes('application/json')){
    return res.status(200).json({ ok:true })
  }
  res.setHeader('Content-Type','text/html')
  return res.status(200).send('<html><body><script>window.location.href="/dashboard"</script></body></html>')
}
