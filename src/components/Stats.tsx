interface StatProps {
  number: string;
  statement: string;
}
const Stat: React.FC<StatProps> = ({ number, statement }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-scale">
      <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center">
        <i className="h-8 w-8 text-brand-blue"></i>
      </div>
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-gray-600">{statement}</p>
    </div>
  )
};
export default Stat;